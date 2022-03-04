package gov.gsa.forms.service;

import java.security.Principal;

public interface BoxSignReqService {

        String executeBoxSignRequest(
            String url,
            String pdfName,
            Principal principal,
            String firstName,
            String lastName,
            String email,
            String jointRequest
        );

}
