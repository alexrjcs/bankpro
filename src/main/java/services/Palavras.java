package services;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import dto.PalavraDto;
import helpper.PalavrasHelpper;

@Path("palavras")
public class Palavras {
	@POST
    @Path("count")
    @Produces(MediaType.APPLICATION_JSON)
    public Response count(PalavraDto palavra) {
		try {
			return Response.ok(PalavrasHelpper.getPalavras(palavra)).build();
		} catch (Exception e) {
			return Response.status(500).build();
		}
    }
}
