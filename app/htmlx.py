from . import load_template
from . import load_option


class Template:
    def __get__(self, obj, objtype=None):
        return load_template(path) if (path := obj.template_path) else {}


class Html:
    template = Template()

    def __init__(self, template_path, config_path):
        self.template_path = template_path
        self._config_path = config_path
        self._configure = self.reset()

    def reset(self):
        return load_option(path) if (path := self._config_path) else {}

    @property
    def config(self):
        return self._configure

    def __repr__(self):
        return self.template.substitute(self.config)

    def encode(self, encoding='utf-8'):
        return repr(self).encode(encoding)

    def update(self, config):
        self.config.update(config)
