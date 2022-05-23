module.exports = {
  controllers: [
    {
      ngController: 'XMPPersonalizedPage',
      controller: 'xmp-personalized-controller',
    },
    {
      ngController: 'XMPAnonymousPage',
      controller: 'xmp-anonymous-controller',
    },
  ],
  directives: [
    'xmp-anonymous-controller',
    'xmp-turn-off-default-error',
    'xmp-cloak',
    'xmp-success-trigger',
    'xmp-class',
    'xmp-clicked-triggered-email',
    'xmp-success-url',
    'xmp-failure-url',
    'xmp-success-js',
    'xmp-failure-js',
    'xmp-password',
    'xmp-confirm-password',
    'xmp-confirm-error',
    'xmp-write-ador',
    'xmp-default-value',
    'xmp-href',
    'xmp-image-asset',
    'xmp-tracking-page-name',
    'xmp-personalized-controller',
    'xmp-register',
    'xmp-show',
    'xmp-src',
    'xmp-text',
    'xmp-update',
  ],
  version: '4.0',
}