"""zara URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from female.views import main, design_under_production, _fashion, _fb, _google, _list, _product, _region, _shortage, _ship
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', main),
    url(r'^design_under_production/$', design_under_production),
    url(r'^fashion/$', _fashion),
    url(r'^fb/$', _fb),
    url(r'^google/$', _google),
    url(r'^list/$', _list),
    url(r'^product/$', _product),
    url(r'^region/$', _region),
    url(r'^shortage$', _shortage),
    url(r'^ship$', _ship)

]
