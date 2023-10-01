import { authApi } from '@/services/auth.service';
import { boxesApi } from '@/services/boxes.service';
import { paymentMethodApi } from '@/services/payment-method.service';
import { statisticsApi } from '@/services/statistics.service';
import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';

export function getTokenFromCookies() {
  const cookieValue = getCookie('access_token');
  if (typeof cookieValue !== 'string') return '';
  return cookieValue;
}

/**
 * Build a option for next-cookie
 * @param duration Time in day of duration of cookie in the browser, default 1 day
 * @returns
 */
export function createCookieOptions(duration = 1) {
  return {
    path: '/',
    sameSite: true,
    maxAge: 60 * 60 * 24 * duration,
  };
}

/**
 * Se encarga de actualizar todas las instancias de axios con el valor de la key
 * @param token Llave de authorización
 */
export function setAuthTokens(token?: string) {
  const authorization = token ? `Bearer ${token}` : token;
  const axiosInstances = [axios, authApi, boxesApi, statisticsApi, paymentMethodApi];

  axiosInstances.forEach(instance => {
    instance.defaults.headers.common.Authorization = authorization;
  });
}

/**
 * Se encarga de guardar el token de authorización en las cookies y setearla en
 * todas las instancias de axios creadas.
 * @param token Token de authorización
 */
export const saveAuthToken = (token: string) => {
  setCookie('access_token', token, createCookieOptions(1));
  setAuthTokens(token);
};

/**
 * Se encarga de eliminar el token de authorización de las cookies y actualizar todas las instancias
 * de axios para remover la cabecera de authorización.
 */
export const clearAuthToken = () => {
  setCookie('access_token', '', createCookieOptions(0));
  setAuthTokens();
};
