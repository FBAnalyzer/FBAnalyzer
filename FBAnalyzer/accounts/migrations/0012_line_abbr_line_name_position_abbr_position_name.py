# Generated by Django 4.0.5 on 2022-07-16 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0011_line_position_remove_shot_player_level_isnational_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='line',
            name='abbr',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='line',
            name='name',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='position',
            name='abbr',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='position',
            name='name',
            field=models.CharField(max_length=20, null=True),
        ),
    ]