from django.db import models

class Hoteldetails(models.Model):
    hotelname = models.CharField(max_length=50, null="false",blank="false")
    ph_no = models.CharField(max_length=10, null="false", blank="false")
    email = models.EmailField(unique=True,null=False ,blank=False)
    address = models.CharField(max_length=60, null=False ,blank=False)

    def __str__(self):
        return self.hotelname

