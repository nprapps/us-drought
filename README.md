Tracking the Drought
=======================

This project builds a timeline of US drought conditions using data from the US Drought Monitor. It should produce an HTML page that can be embedded as an iframe.

Getting started
---------------

Building maps requires [Mapnik 2](http://mapnik.org). On OSX, the easiest way to install this is with homebrew:

    $ brew install mapnik

Now go get lunch. This may take a while.

The rest of the build script is written in Python and can be safely tucked away in a virtual environment. Assuming you have [virtualenvwrapper][vew] installed (and you should), do this:

    $ mkvirtualenv drought --system-site-packages

Note that this environment will use your global site packages directory, which is unusual. We do this because installing Mapnik entirely inside a virtual environment is nearly impossible. This way, we install it once globally, then put everything else in an isolated space that won't pollute other projects.

Now we're ready to grab the code and build this thing. Clone the repo, install requirements and run the build script.

    $ cdvirtualenv # go to the root of our new virtualenv (workon drought)
    $ git clone git@github.com:npr/us-drought.git
    $ cd us-drought
    $ pip install -r requirements.txt
    $ fab rebuild

To see the result:

    $ python -m SimpleHTTPServer

Now go to <http://localhost:8000>.	

To update map-slider:

 1. Download the latest shapefiles from the [US Drought Monitor][usdm]
 2. Unzip files and add them to the `data` directory. The folder and shapefile within should be named something like `usdm120412`.
 3. Run `fab rebuild`


[usdm]: http://droughtmonitor.unl.edu/dmshps_archive.htm
[vew]: http://www.doughellmann.com/projects/virtualenvwrapper/