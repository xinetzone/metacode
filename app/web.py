import cherrypy

from .htmlx import Html


class TemplateHtml(Html):
    def __init__(self, template_path, config_path):
        super().__init__(template_path, config_path)

    def quickstart(self, script_name='', config=None):
        cherrypy.quickstart(self, script_name, config)
