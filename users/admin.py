from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.db import models
from django.forms import Textarea
from .models import User


@admin.register(User)
class UserAdmin(UserAdmin):
    search_fields = ('email', 'username', 'first_name', 'last_name')
    list_filter = ('email','username', 'date_joined')
    list_display = ('id', 'uuid', 'first_name', 'last_name', 'email', 'username', 'is_active', 'is_staff', 'is_superuser')
    ordering = ("-date_joined",)
    fieldsets = (
        (None, {'fields': ('username', 'email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups')}),
        ('Personal', {'fields': ('first_name', 'last_name', 'picture')})
    )
    formfield_overrides = {
        models.TextField : {'widget': Textarea(attrs={'rows': 20, 'cols' : 60})}
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('first_name', 'last_name', 'username', 'email', 'password', 'picture', 'groups', 'is_staff', 'is_active', 'is_superuser')}
         ),
    )