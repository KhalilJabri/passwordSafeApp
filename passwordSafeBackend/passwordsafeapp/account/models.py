from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

import uuid

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email, name, password=None, password2=None):
        if not email:
            raise ValueError("User must have an email address")
        # if password != password2 :
        #     raise ValueError("passwords mismatch!")

        user = self.model(
            email = self.normalize_email(email),
            name = name
        )
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, name, email, password=None):

        user = self.create_user(
            email,
            name=name,
            password=password,
            # password2
        )
        # user.is_active = False
        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(
        # verbose_name='email',
        max_length=255,
        unique=True
    )
    name = models.CharField(max_length=200)
    numero = models.CharField(max_length=15, blank=True)
    otp = models.CharField(max_length=10, blank=True)
    is_active = models.BooleanField(default=True)
    picture = models.ImageField(upload_to='profileImage/%Y/%m/%d/', blank=True)
    is_admin = models.BooleanField(default=False)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']
    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin