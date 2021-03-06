# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models


class Shortage(models.Model):
    shortage_id = models.TextField(primary_key=True)
    branch_id = models.TextField(blank=True, null=True)
    product_id = models.TextField(blank=True, null=True)
    quantity = models.IntegerField(blank=True, null=True)
    has_send = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Shortage'


class AuthGroup(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)
    name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()
    username = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class BranchList(models.Model):
    branch_id = models.TextField(db_column='branch_ID', primary_key=True)  # Field name made lowercase.
    region = models.TextField(blank=True, null=True)
    customer_num = models.IntegerField(blank=True, null=True)
    ranking = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'branch_list'


class BranchRequest(models.Model):
    product_id = models.TextField(db_column='Product_ID', primary_key=True)  # Field name made lowercase.
    name = models.TextField(db_column='Name', blank=True, null=True)  # Field name made lowercase.
    price = models.IntegerField(db_column='Price', blank=True, null=True)  # Field name made lowercase.
    weight = models.IntegerField(db_column='Weight', blank=True, null=True)  # Field name made lowercase.
    type = models.TextField(db_column='Type', blank=True, null=True)  # Field name made lowercase.
    productivity = models.IntegerField(db_column='Productivity', blank=True, null=True)  # Field name made lowercase.
    sales_quantity = models.IntegerField(db_column='Sales_quantity', blank=True, null=True)  # Field name made lowercase.
    inventory = models.IntegerField(db_column='Inventory', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'branch_request'


class DesignUnderProduction(models.Model):
    product_id = models.IntegerField(primary_key=True)
    name = models.TextField(db_column='Name', blank=True, null=True)  # Field name made lowercase.
    recommend_price = models.IntegerField(blank=True, null=True)
    weight = models.IntegerField(blank=True, null=True)
    type = models.TextField(db_column='Type', blank=True, null=True)  # Field name made lowercase.
    productivity = models.IntegerField(db_column='Productivity', blank=True, null=True)  # Field name made lowercase.
    publish_date = models.TextField(blank=True, null=True)
    img_url = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'design_under_production'


class DjangoAdminLog(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    action_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class KeywordCounter(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    keyword = models.TextField()
    frequence = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'keyword_counter'


class KeywordRelations(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    product_id = models.TextField()
    product_name = models.TextField()
    keyword = models.TextField()
    keyword_weight = models.TextField(blank=True, null=True)
    price = models.TextField(blank=True, null=True)  # This field type is a guess.
    img_url = models.TextField(blank=True, null=True)  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'keyword_relations'
