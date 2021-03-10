from . import load_template
from . import load_option


class Template:
    def __get__(self, obj, objtype=None):
        path = obj.template_path
        if path:
            return load_template(path)
        else:
            return {}


class Html:
    template = Template()

    def __init__(self, template_path, config_path):
        self.template_path = template_path
        self._config_path = config_path
        self._configure = self.reset()

    def reset(self):
        path = self._config_path
        if path:
            return load_option(path)
        else:
            return {}

    def __repr__(self):
        return self.template.substitute(self.configure)

    def encode(self, encoding='utf-8'):
        return repr(self).encode(encoding)

    @property
    def configure(self):
        return self._configure

    def update_content(self, config):
        self.configure.update(config)
