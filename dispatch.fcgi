#!/home/oxtn/env/bin/python
import sys

from paste.deploy import loadapp
from flup.server.fcgi_fork import WSGIServer

app = loadapp('config:/home/oxtn/env/quotes-angularjs/development.ini')
server = WSGIServer(app)
server.run()
