from __future__ import division
import jieba
from django.db.models import Q
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from female.models import BranchRequest, DesignUnderProduction, BranchList, Shortage
from random import randint, shuffle
# from female.models import BranchRequest, Des
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
    invested = 20000
    budget = 500000
    return render(request, 'fb.html', {'invested': invested,
                                       'budget': budget,
                                       'percentages': float(invested / budget) * 100})


def _google(request):
    invested = 30000
    budget = 500000
    return render(request, 'google.html', {'invested': invested,
                                           'budget': budget,
                                           'percentages': float(invested / budget) * 100})


def _list(request):
    branch = BranchList.objects.all()
    for _, i in enumerate(branch):
        shortages = []
        shortages = Shortage.objects.filter(branch_id=i.branch_id)
        branch[_].shortages = shortages

    return render(request, 'list.html', {'branch': branch})


def _product(request):
    request_products = BranchRequest.objects.all()
    branch = list(BranchList.objects.all())
    for product in request_products:
        product.order = 0
        product.shortage = Shortage.objects.filter(
            Q(product_id=product.product_id))
        for shorter in product.shortage:
            product.order += shorter.quantity
            shorter.quantity = int(shorter.quantity * 0.8)
    return render(request, 'product.html', {'products': request_products, 'branch': branch})


def _ship(request):
    _product = request.POST.get("product_id")
    branch_id = request.POST.getlist("branch_id")
    best_ship_quantity = request.POST.getlist("shipNum")
    user_manual_quantity = request.POST.getlist("shipQuantity")
    for i, (branch_id, quantity) in enumerate(zip(branch_id, best_ship_quantity)):
        if user_manual_quantity:
            if user_manual_quantity[i] != '':
                product = BranchRequest.objects.get(product_id=_product)
                product.inventory -= int(user_manual_quantity[i])
                product.save()
                print(_product)
                shortage = Shortage.objects.get(
                    Q(product_id=_product) & Q(branch_id=branch_id))
                shortage.quantity -= int(user_manual_quantity[i])
                shortage.has_send = 1
                shortage.save()
        else:
            product = BranchRequest.objects.get(product_id=_product)
            product.inventory -= int(quantity)
            product.save()
            shortage = Shortage.objects.get(
                Q(product_id=_product) & Q(branch_id=branch_id))
            shortage.quantity -= int(quantity)
            shortage.has_send = 1
            shortage.save()
    return HttpResponseRedirect('/product')


def _region(request):
    branch = BranchList.objects.all()
    for _, i in enumerate(branch):
        shortages = []
        shortages = Shortage.objects.filter(branch_id=i.branch_id)
        branch[_].shortages = shortages
    return render(request, 'region.html', {'branch': branch})


def _shortage(request):
    shortage = Shortage.objects.get(
        Q(branch_id=request.GET['branch_id']) & Q(product_id=request.GET['id']))
    product = BranchRequest.objects.get(product_id=request.GET['id'])
    shortage.inventory = product.inventory
    shortage.sales = product.sales_quantity
    shortage.order = shortage.quantity
    shortage.recommend = int(shortage.order * 0.8)
    return render(request, 'shortage.html', {'shortage': shortage})
