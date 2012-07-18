from gevent import monkey
monkey.patch_all()

import datetime
import gevent
import glob
import json
import os

from fabric.api import *

env.pwd = os.path.realpath(os.path.dirname(__file__))
env.data_dir = os.path.join(env.pwd, 'data')
env.xml_dir = os.path.join(env.pwd, 'config/xml')
env.date_format = "%Y-%m-%d"


def rebuild():
    "Rebuild configs, maps and images. Compress JS files. One and done."
    render_configs()
    render_all_maps()
    local('jammit')

def render_configs():
    shapes = glob.glob('data/usdm*/*.shp')
    for filename in shapes:
        render_config_xml(filename)


def render_config_xml(filename):
    """
    Render a mapnik config XML file using a shapefile name as source
    """
    with open('config/tx-drought.template.xml') as f:
        template = f.read()
    
    fn = os.path.realpath(filename)
    
    # name the config xml the same as the corresponding shapefile
    date = _shp_to_date(filename)
    outfile = "config/xml/%s.xml" % date.strftime(env.date_format)
    outfile = os.path.join(env.pwd, outfile)
    with open(outfile, 'wb') as f:
        f.write(template % {'filename': fn})
        print "Rendered XML: %s" % outfile
    
def render_all_maps():
    shapes = glob.glob('data/usdm*/*.shp')
    jobs = [gevent.spawn(render_map, filename) for filename in shapes]
    gevent.joinall(jobs)
    #for filename in shapes:
    #    render_map(filename)
    json_map_list()

def render_map(filename):
    bounds = "-124.73 30 -66.96 43" # the continental US
    #basename = os.path.basename(filename).replace('.shp', '')
    date = _shp_to_date(filename)
    basename = date.strftime(env.date_format)
    xml = "config/xml/%s.xml" % basename
    xml = os.path.join(env.pwd, xml)
    if not os.path.exists(xml):
        render_config_xml(filename)
    
    local('nik2img.py %(xml)s img/maps/%(basename)s.png --bbox %(bbox)s --no-open' % {
        'basename': basename, 'bbox': bounds, 'xml': xml
    })
    
    print "Rendered map: %s.png" % basename
    
def json_map_list():
    images = glob.glob('img/maps/*.png')
    js = "var map_images = %s;" % json.dumps([os.path.basename(i) for i in images], indent=2)
    with open("js/map_images.js", 'wb') as f:
        f.write(js)

def _shp_to_date(filename):
    """
    Return a date from a filename based on a pattern like usdm110111.shp
    """
    base = os.path.basename(filename).replace('.shp', '')
    format = "usdm%y%m%d"
    return datetime.datetime.strptime(base, format)

def _date_to_shp(date):
    format = "usdm%y%m%d.shp"
    return date.strftime(format)


