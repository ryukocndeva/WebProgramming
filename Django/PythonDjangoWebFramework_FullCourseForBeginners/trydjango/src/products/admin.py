from django.contrib import admin

from .models import Product

# Register your models here.

class ProductAdmin(admin.ModelAdmin):
	list_display = ('title', 'featured', 'description', 'summary', 'price')

admin.site.register(Product, ProductAdmin)
