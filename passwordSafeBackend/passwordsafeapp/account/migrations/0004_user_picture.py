# Generated by Django 4.2.4 on 2023-08-16 02:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_alter_user_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='picture',
            field=models.ImageField(blank=True, upload_to='profileImage/%Y/%m/%d/'),
        ),
    ]
