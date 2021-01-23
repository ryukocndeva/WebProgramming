from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home_view(request, *args, **kwargs):
	# return HttpResponse("<h1>Home Page</h1>")
	return render(request, "home.html", {})

def contact_view(request, *args, **kwargs):
	# return HttpResponse("<h1>Contact Page</h1>")
	return render(request, "contact.html", {})

def about_view(request, *args, **kwargs):
	# return HttpResponse("<h1>About Page</h1>")
	return render(request, "about.html", {})

def social_view(request, *args, **kwargs):
	# return HttpResponse("<h1>Social Page</h1>")
	return render(request, "social.html", {})
