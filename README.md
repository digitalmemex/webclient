# Responsive WebClient for DeepaMehta

Based on our experience with the existing DeepaMehta webclient, we want to build the next generation interface for collaborative knowledge management. This is a draft document to describe essential components of the JavaScript based source code.

- We will support various devices, like phones, phablets, tablets and desktop computers (e.g. hammer.js or touchy).
- We will reuse the standard DM4 rest client (as included in the default DeepaMehta 4 Webclient). 
- We will use an up-to-date UI/data binding framework (e.g. angular or knockout).
- We will focus on a modular architecture with dependency mananagment (AMD) to enforce our community based approach (e.g. require.js or common.js).
- We will implement a websocket based event handler to enable collaborative features like shared editing, messaging, etc.
- We will design a framework for configuration management on various levels, from client based user preferences (e.g. themes) to system wide plugin management. It will provide a core configuration facility like a registry or other XML based config dbs (SYSTEM|PLUGIN|USER).
- We will develop a renderer selection facility for compatible map renderers, so that a user can choose wich renderer she wants to use to display her data.

The webclient will be realized as a standard DeepaMehta OSGI plugin without any additional server side logic. It only serves a static HTML5 file and delivers all library dependencies via AMD boot strapping.

## Prototype

[![Build Status](https://dgf.ci.cloudbees.com/buildStatus/icon?job=digitalmemex-webclient-plugin)](https://dgf.ci.cloudbees.com/job/digitalmemex-webclient-plugin/)

The current implementation is just a starting point that handles the bootstrap process.

To get started you have to clone and build this like any other DeepaMehta plugin

    mvn clean install pax:run

The local start page is accessible on http://localhost:8080/org.digitalmemex.webclient/index.html

For simplicity the local DeepaMehta file repository is used as a storage for all JavaScript files,
this enables a semi-live code experience - just edit the file and reload the page - as in most environments.

It is also possible to update all JavaScript dependencies on the fly in a second terminal with

    mvn verify
