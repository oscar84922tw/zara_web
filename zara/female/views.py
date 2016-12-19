from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def main(request):
    return render(request, 'blank.html', {
    'title': 'blank'
    })

def design_under_production(request):
    return render(request, 'design-under-production.html')

def _fashion(request):
    return render(request, 'fashion.html')

def _fb(request):
    return render(request, 'fb.html')

def _google(request):
    return render(request, 'google.html')

def _list(request):
    return render(request, 'list.html')

def _product(request):
    return render(request, 'product.html')

def _region(request):
    return render(request, 'region.html')
