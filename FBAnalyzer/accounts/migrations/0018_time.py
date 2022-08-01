# Generated by Django 4.0.5 on 2022-08-01 19:46

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('accounts', '0017_level_created_livedata_created_player_created_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Time',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.IntegerField()),
                ('position', models.IntegerField()),
                ('T1LW', models.CharField(blank=True, max_length=50)),
                ('T1C', models.CharField(blank=True, max_length=50)),
                ('T1RW', models.CharField(blank=True, max_length=50)),
                ('T1LD', models.CharField(blank=True, max_length=50)),
                ('T1RD', models.CharField(blank=True, max_length=50)),
                ('T1G', models.CharField(blank=True, max_length=50)),
                ('T2LW', models.CharField(blank=True, max_length=50)),
                ('T2C', models.CharField(blank=True, max_length=50)),
                ('T2RW', models.CharField(blank=True, max_length=50)),
                ('T2LD', models.CharField(blank=True, max_length=50)),
                ('T2RD', models.CharField(blank=True, max_length=50)),
                ('T2G', models.CharField(blank=True, max_length=50)),
                ('game', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.game')),
                ('lines', models.ManyToManyField(to='accounts.line')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
