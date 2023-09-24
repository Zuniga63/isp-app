import { authenticateToken } from '@/services/auth.service';
import { useMutation } from '@tanstack/react-query';

export function useAuthAccesToken() {
  return useMutation({
    mutationFn: authenticateToken,
  });
}
