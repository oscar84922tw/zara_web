from django.shortcuts import render
from django.http import HttpResponse
from female.models import BranchRequest, DesignUnderProduction, BranchList
# Create your views here.


def main(request):
    return render(request, 'blank.html', {
        'title': 'blank'
    })


def design_under_production(request):
    design = DesignUnderProduction.objects.all()
    return render(request, 'design-under-production.html', {'dupp': design})


def _fashion(request):
    return render(request, 'fashion.html')


def _fb(request):
    return render(request, 'fb.html')


def _google(request):
    return render(request, 'google.html')


def _list(request):
    branch = BranchList.objects.all()
    return render(request, 'list.html', {'branch': branch})


def _product(request):
    request_products = BranchRequest.objects.all()
    return render(request, 'product.html', {'products': request_products})


def _region(request):
    branch = BranchList.objects.all()
    return render(request, 'region.html', {'branch': branch})
