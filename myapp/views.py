from django.shortcuts import render
from django.http import HttpResponse
from .models import Hoteldetails

def index(request):
    return render(request, 'myapp/index.html')


def create(request):
    if request.method == 'POST':
        hotelname = request.POST['hotelname']
        ph_no = request.POST['ph_no']
        email = request.POST['email']
        address = request.POST['address']

        new_details = Hoteldetails(hotelname=hotelname,ph_no=ph_no,email=email,address=address)
        new_details.save()
        

        return HttpResponse("Form submitted successfully!")
    else:
        return HttpResponse("The email is already exits")

    return HttpResponse("Invalid request method. Only POST requests are allowed.", status=405)

    