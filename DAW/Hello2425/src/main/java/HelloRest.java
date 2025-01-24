
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/hello")
@Produces(MediaType.APPLICATION_JSON)
public class HelloRest {
	
	@GET
	public Response sayHello() {
			
		String mssg = "Hola mundo 23/01/2025";
			
		return Response
				.status(Response.Status.OK)
				.entity(mssg)
				.build();
	}
	
	
	
} 
