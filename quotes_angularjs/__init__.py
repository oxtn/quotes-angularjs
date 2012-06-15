from pyramid.config import Configurator
from sqlalchemy import engine_from_config

from .models import DBSession

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    engine = engine_from_config(settings, 'sqlalchemy.')
    DBSession.configure(bind=engine)
    config = Configurator(settings=settings)
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('template','/')
    config.add_route('home','/home.tmpl')
    config.add_route('add','/add.tmpl')
    config.add_route('view_json','view/{id}.json')
    config.add_route('view','/view.tmpl')
    config.add_route('list','/list.tmpl')
    config.add_route('list_json','/list.json')
    config.add_route('vote','/vote/{id}/{direction}')
    config.scan()
    return config.make_wsgi_app()

