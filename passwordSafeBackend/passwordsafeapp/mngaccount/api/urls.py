from django.urls import path

from .views import PAccountViews, GUDAccountViews, CopiedTimeAccountViews

urlpatterns = [
    path('addAccount/', PAccountViews.as_view(), name='add-account'),
    path('gudaccount/<int:pk>/', GUDAccountViews.as_view(), name='get-update-delete-account'),
    path('copiedAccount/<int:pk>/', CopiedTimeAccountViews.as_view(), name='copied-account'),

]