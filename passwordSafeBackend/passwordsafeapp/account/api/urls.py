from django.urls import path

from .views import RegisterViews, GetUpdateUserViews, LoginViews

urlpatterns = [
    path('register/', RegisterViews.as_view(), name='register'),
    path('login/', LoginViews.as_view(), name='login'),
    path('gestionUser/<str:pk>/', GetUpdateUserViews.as_view(), name='gestion-user'),

]