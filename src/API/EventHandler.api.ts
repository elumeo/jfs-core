
const fallbackCopyToClipboard = (value: string) => {
  const tempEl = document.createElement('textarea');
  tempEl.value = value;
  tempEl.setAttribute('readonly', '');
  tempEl.style.position = 'absolute';
  tempEl.style.left = '-9999px';
  document.body.appendChild(tempEl);
  tempEl?.focus();
  tempEl?.select();
  return new Promise<{ success: boolean }>(
    (resolve, reject) => {
      const success = document.execCommand('copy')
      document.body.removeChild(tempEl);
      return success
        ? resolve({ success })
        : reject({ success })
    });
}

export const copyToClipboard = async (ids: string) => {
  try {
    const { state } = await navigator.permissions.query({ name: 'clipboard-write' as PermissionName })
    if (state == 'granted' || state == 'prompt') {
      await navigator?.clipboard?.writeText?.(ids)
      return { success: true }
    }
    return await fallbackCopyToClipboard(ids)
  }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch (error) {
    return await fallbackCopyToClipboard(ids)
  }
}
