**Rust Camera Control System (Plane System)**

The plane system is an embedded system written in Rust which controls the on-board Sony R10C camera and custom gimbal for Cornell University Unmanned Air Systems' VTOL drone. The system, which runs on a Raspberry Pi 4, handles the image capture protocol for the team's computer vision pipeline. It can be operated via either a command line interface or custom REST API.

![Atlas takes flight](/plane.jpeg)

I was responsible for creating the REST API for the plane system controls, as well as writing custom camera-capture procedures. Currently, we are working on
building the next generation of the plane system, which will be compatible with a lighter Go-Pro camera.
