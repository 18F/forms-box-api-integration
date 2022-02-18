package gov.gsa.forms.service.impl;

import com.box.sdk.*;
import gov.gsa.forms.service.BoxSignReqService;
import org.springframework.beans.factory.annotation.Value;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import lombok.extern.slf4j.Slf4j;
import javax.inject.Named;

@Named
@Slf4j
public class BoxSignReqServiceImpl implements BoxSignReqService {
    private String envVariable;
    @Value("${box-request-token}")
    private String boxRequestToken;
    @Override
    public String executeBoxSignRequest(String url, String pdfName, Principal principal, String firstName, String lastName, String email, String jointRequest) {
        try {
            envVariable = System.getenv("API_TOKEN");
            if( boxRequestToken!=null && !boxRequestToken.isEmpty()){
                envVariable = boxRequestToken;
            }

            log.info(">>>>>box sign request");
            return postBoxRequest(url, envVariable,email);

        } catch (Exception e) {
            log.error("Error occurred executing box SignRequest", e);
        }
        return "";
    }

    private  String postBoxRequest(String  url, String token, String email) throws IOException {
        URL pdfurl = new URL(url);
        if(email==null || email.isEmpty()){
            email = "mesele29@gmail.com";
        }
        final String uuid = UUID.randomUUID().toString().replace("-", "");
        //get connected to the boxsign
        BoxAPIConnection api = new BoxAPIConnection(token);
        //upload a pdf for signature
        BoxFolder rootFolder = BoxFolder.getRootFolder(api);
        InputStream in = pdfurl.openStream();
        BoxFile.Info newFileInfo = rootFolder.uploadFile(in, uuid+".pdf");
        log.debug(String.valueOf(newFileInfo));
        in.close();
        List<BoxSignRequestFile> files = new ArrayList<BoxSignRequestFile>();
        BoxSignRequestFile file = new BoxSignRequestFile(newFileInfo.getID());
        files.add(file);
         //sign request
        List<BoxSignRequestSigner> signers = new ArrayList<BoxSignRequestSigner>();
        BoxSignRequestSigner newSigner = new BoxSignRequestSigner(email);
        newSigner.setRole(BoxSignRequestSignerRole.Signer);
        newSigner.setEmbedUrlExternalUserId(uuid);
        signers.add(newSigner);
        String destinationParentFolderId = "0";
        BoxSignRequest.Info signRequestInfo = BoxSignRequest.createSignRequest(api, files,
            signers, destinationParentFolderId);
        return signRequestInfo.getJson();
    }
}
