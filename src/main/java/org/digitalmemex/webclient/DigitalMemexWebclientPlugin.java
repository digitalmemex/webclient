package org.digitalmemex.webclient;


import de.deepamehta.core.osgi.PluginActivator;
import de.deepamehta.core.service.Inject;
import de.deepamehta.plugins.files.service.FilesService;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;


@Path("/dmx")
public class DigitalMemexWebclientPlugin extends PluginActivator {

    @Inject
    private FilesService repo;

    @GET
    @Produces("text/html")
    public InputStream index() {
        try {
            return new FileInputStream(repo.getFile("org/digitalmemex/webclient/index.html"));
        } catch (FileNotFoundException e) {
            throw new WebApplicationException(e, 404);
        }
    }

}
