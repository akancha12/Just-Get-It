from django.db import models

# Create your models here.
class Fabinspection(models.Model):
    orderNo=models.CharField(max_length=10)
    lotNo=models.IntegerField()
    rollNo=models.IntegerField()
    fabric=models.CharField(max_length=30)
    acceptYards=models.IntegerField()
    acceptMeter=models.IntegerField()
    fWidth=models.IntegerField()
    unit=models.CharField(max_length=10)
    sticked=models.IntegerField()
    actual=models.IntegerField()
    deviation=models.IntegerField()
    defect=models.CharField(max_length=64)
    no3=models.IntegerField()
    no36=models.IntegerField()
    no69=models.IntegerField()
    no9=models.IntegerField()
    linearPoints=models.IntegerField()
    hole01=models.IntegerField()
    hole1=models.IntegerField()
    holePoints=models.IntegerField()
    totalPoints=models.IntegerField()
    pointsyards=models.IntegerField()
    pointsperm=models.IntegerField()
    pointspercm=models.IntegerField()
    grade=models.CharField(max_length=2)
    acceptance=models.CharField(max_length=2)

    def __str__(self):
        return f"{self.orderNo}-{self.lotNo}-{self.deviation}"