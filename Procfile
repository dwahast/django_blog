release: python3 django_project/manage.py migrate
web: gunicorn --pythonpath django_project django_project.wsgi --preload --log-file -