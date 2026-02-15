/**
 * Type pour l'inscription à la newsletter
 */
export interface NewsletterSubscription {
  email: string;
}

/**
 * Type pour la réponse de l'API newsletter
 */
export interface NewsletterResponse {
  message?: string;
  error?: string;
}
