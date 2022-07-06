# Generated by Django 4.0.5 on 2022-07-06 20:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_game_delete_live'),
    ]

    operations = [
        migrations.CreateModel(
            name='Level',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=50)),
                ('isSenior', models.BooleanField()),
                ('isMale', models.BooleanField()),
            ],
        ),
        migrations.RemoveField(
            model_name='team',
            name='goalsGame',
        ),
        migrations.RemoveField(
            model_name='team',
            name='goalsPeriod',
        ),
        migrations.RemoveField(
            model_name='team',
            name='lineOn',
        ),
        migrations.RemoveField(
            model_name='team',
            name='possessionGame',
        ),
        migrations.RemoveField(
            model_name='team',
            name='possessionPeriod',
        ),
        migrations.RemoveField(
            model_name='team',
            name='xgGame',
        ),
        migrations.RemoveField(
            model_name='team',
            name='xgPeriod',
        ),
        migrations.AddField(
            model_name='player',
            name='team',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.team'),
        ),
        migrations.CreateModel(
            name='Shot',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.IntegerField()),
                ('result', models.IntegerField()),
                ('type', models.IntegerField()),
                ('distance', models.DecimalField(decimal_places=2, max_digits=5)),
                ('angle', models.DecimalField(decimal_places=2, max_digits=5)),
                ('xG', models.DecimalField(decimal_places=2, max_digits=5)),
                ('isPP', models.BooleanField()),
                ('isSH', models.BooleanField()),
                ('player', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.player')),
            ],
        ),
        migrations.AddField(
            model_name='team',
            name='level',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.level'),
        ),
    ]
