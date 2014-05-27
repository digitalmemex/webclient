webclient
=========

Responsive Webclient for DeepaMehta


Based on our experience with the existing DeepaMehta webclient, we want to build the next generation interface for collaborative knowledge management. This is a draft document to describe essential components of the JavaScript based source code.

- We will support various devices, like phones, phablets, tablets and desktop computers (e.g. hammer.js or touchy)
- We will reuse the standard DM4 rest client (as included in the default DeepaMehta 4 Webclient). 
- We will use an up-to-date UI/data binding framework (e.g. angular or knockout).
- We will focus on a modular architecture with dependency mananagment (AMD) to enforce our community based approach (e.g. require.js or common.js).
- We will implement a websocket based event handler to enable collaborative features like shared editing, messaging, etc.
- We will design a framework for configuration management on various levels, from client based user preferences (e.g. themes) to system wide plugin management. It will provide a core configuration facility like a registry or other XML based config dbs (SYSTEM|PLUGIN|USER).
- We will develop a renderer selection facility for compatible map renderers, so that a user can choose wich renderer she wants to use to display her data. 
