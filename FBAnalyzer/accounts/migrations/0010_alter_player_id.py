# Generated by Django 4.0.5 on 2022-07-06 21:02

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0009_level_remove_team_goalsgame_remove_team_goalsperiod_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
