/**
 * useAppleAuth.ts
 *
 * Author: Maurice T. Meyer
 * E-Mail: maurice@lavireo.com
 *
 * This document is the property of Laviréo.
 * It is considered confidential and proprietary.
 *
 * This document may not be reproduced or transmitted in any form,
 * in whole or in part, without the express written permission of
 * Laviréo.
 *
 * (c) Laviréo. All rights reserved.
 */

import { useCallback } from 'react';

/**
 * @NOTE (Maurice):
 * See https://developer.apple.com/documentation/sign_in_with_apple/request_an_authorization_to_the_sign_in_with_apple_server */
const REDIRECT_URL = 'https://appleid.apple.com/auth/authorize';

export const useAppleAuth = () => {
  return useCallback(() => {
    window.location.href = REDIRECT_URL;
  }, []);
};

// https://appleid.apple.com/auth/authorize
// ?client_id=notion.signin
// &nonce=fd8ca0ecb67f1611a395c04d7aa9cae275de7fb5877e36fa
// &redirect_uri=https%3A%2F%2Fwww.notion.so%2Fapplepopupcallback
// &response_type=code
// &response_mode=form_post
// &scope=name%20email
// &state=eyJjYWxsYmFja1R5cGUiOiJyZWRpcmVjdCIsImVuY3J5cHRlZFRva2VuIjoidjAyOmFwcGxlX2F1dGhfZmxvdzpwbzVzT29xT1FvMmk4aldYZXNRRzFFZWlhV3VhbVdZOUc0S0lqRUdQV3BnSFlSbmlFQjQ1emlGaUJiVl9xQzNzcXFfaWNJeVFtSkw0eWZwWndTcTRsZGxpOHlaUkxrS0d3QmVCTGN0Y0dGelpVdHVpMVFVOFc0bnFnY0hIaXJpVm53NloiLCJlbmNyeXB0ZWROb25jZSI6InYwMjphcHBsZV9hdXRoX2Zsb3c6WVk0cDdlel9UTlE5MHJfQmZIZ21PZy1DazZJM0NKWWR2WU52ZjY1OXlYUjBNb3RQanlzbmZlaG1JVjRhRWdONjRWcElhVWotNGZvS0RiN05IYWUtOWhpMDF3aW9Hc1ZURXJCYmw4aDZoa1REak5pb3EwMUVGQlB5Nm5OQ2dIaEJpZUtBdlppdVRnYWxwcUdZUENNZCJ9