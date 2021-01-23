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

	my_context = {
		"my_text" : "This is about us",
		"my_number" : 123,
		"my_list" : [123, 4242, 12345, "Abc"],
	}

	return render(request, "about.html", my_context)

def social_view(request, *args, **kwargs):
	# return HttpResponse("<h1>Social Page</h1>")
	return render(request, "social.html", {})

