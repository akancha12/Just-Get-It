from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from .models import Fabinspection

# Create your views here.
def index(request):
    return render(request,'cutting.html')
    # return HttpResponse("Hello")

def summary(request):
    context={
        "fabrics": Fabinspection.objects.all()
    }
    return render(request,'summary.html',context)

def sub(request):
    if(request.method=='POST'):
        f=Fabinspection()
        f.orderNo=int(request.POST["orderNo"])
        f.lotNo=int(request.POST["lotNo"])
        f.rollNo=int(request.POST["rollNo"])
        f.fabric=request.POST["fType"]
        # acceptP1=int(request.POST["acceptP1"])
        f.acceptYards=0
        f.acceptMeter=0
        # acceptP2=int(request.POST["acceptP2"])
        f.fWidth=int(request.POST["fWidth"])
        f.unit=request.POST["units"]
        f.sticked=int(request.POST["slength"])
        f.actual=int(request.POST["alength"])
        f.deviation=int(request.POST["deviation"])
        f.defect=request.POST["dType"]
        f.no3=int(request.POST["d3"])
        f.no36=int(request.POST["d36"])
        f.no69=int(request.POST["d69"])
        f.no9=int(request.POST["d9"])
        f.linearPoints=int(request.POST["totalPoints"])
        f.hole01=int(request.POST["n01"])
        f.hole1=int(request.POST["ng1"])
        f.holePoints=int(request.POST["hp"])
        # p100=int(request.POST["p100"])
        f.pointsyards=int(request.POST["p100"])
        f.totalPoints=int(request.POST["tlp"])
        # p100m=int(request.POST["p100m"])
        # p100cm=int(request.POST["p100cm"])
        f.pointsperm=0
        f.pointspercm=0
        f.grade='A'
        f.acceptance='Y'
        f.save()
        return HttpResponseRedirect(reverse("index"))