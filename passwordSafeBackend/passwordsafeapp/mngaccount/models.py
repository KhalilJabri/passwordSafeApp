from django.db import models

from account.models import User
# Create your models here.

class Account(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField()
    password = models.CharField(max_length=30)
    copied_at = models.DateTimeField(auto_now_add=True)
    logo = models.ImageField(upload_to='logoAccount/%Y/%m/%d', blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='accounts')

    def __str__(self):
        return self.name + ' : ' + self.user.name