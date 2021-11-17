import environ
from .base import *

env = environ.Env()

DEBUG = env.bool("DEBUG", False)

SECRET_KEY = env("SECRET_KEY")

ALLOWED_HOSTS = env.list("ALLOWED_HOSTS")

DATABASES = {
    "default": env.db(),
}

AWS_ACCESS_KEY_ID = env("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = env("AWS_SECRET_ACCESS_KEY")
AWS_STORAGE_BUCKET_NAME = env("AWS_STORE_BUCKET_NAME")
AWS_S3_SIGNATURE_VERSION = env.bool("AWS_S3_SIGNATURE_VERSION", False)
AWS_DEFAULT_REGION = env("AWS_DEFAULT_REGION")
AWS_S3_REGION_NAME = env("AWS_S3_SIGNATURE_VERSION")
S3_USE_SIGV4 = env.bool("S3_USE_SIGV4", False)
AWS_S3_HOST = "s3." + env("AWS_DEFAULT_REGION") + ".amazonaws.com"

AWS_S3_FILE_OVERWRITE = env.bool("AWS_S3_FILE_OVERWRITE", False)
AWS_DEFAULT_ACL = None
DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"