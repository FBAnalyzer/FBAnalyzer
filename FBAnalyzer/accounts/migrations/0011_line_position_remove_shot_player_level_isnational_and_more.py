# Generated by Django 4.0.5 on 2022-07-16 18:44

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0010_delete_line'),
    ]

    operations = [
        migrations.CreateModel(
            name='Line',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Position',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
            ],
        ),
        migrations.RemoveField(
            model_name='shot',
            name='player',
        ),
        migrations.AddField(
            model_name='level',
            name='isNational',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='team',
            name='isMen',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='team',
            name='isNational',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='team',
            name='isSenior',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='level',
            name='isMale',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='level',
            name='isSenior',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='jersey_number',
            field=models.IntegerField(null=True),
        ),
        migrations.RemoveField(
            model_name='player',
            name='team',
        ),
        migrations.AddField(
            model_name='player',
            name='team',
            field=models.ManyToManyField(null=True, to='accounts.team'),
        ),
        migrations.AlterField(
            model_name='shot',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='team',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='team',
            name='level',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='accounts.level'),
        ),
        migrations.AddField(
            model_name='player',
            name='position',
            field=models.ManyToManyField(null=True, to='accounts.position'),
        ),
        migrations.AddField(
            model_name='team',
            name='line',
            field=models.ManyToManyField(to='accounts.line'),
        ),
    ]
