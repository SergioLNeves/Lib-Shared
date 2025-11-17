# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| < 2.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please follow these steps:

1. **Do NOT open a public issue** - This could expose the vulnerability to malicious actors
2. **Email the maintainer** directly at: [your-email@example.com]
3. **Include details**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## Security Best Practices for Users

When using this library in your projects:

1. **Keep dependencies updated**: Run `pnpm update` regularly
2. **Run security audits**: Use `pnpm audit` to check for vulnerabilities
3. **Validate component names**: When using the CLI, only use official component names
4. **Review code**: Since components are copied to your project, review them before use
5. **Use Content Security Policy**: Implement CSP headers in your application
6. **Enable 2FA**: Use two-factor authentication on npm and GitHub

## Known Security Considerations

### CLI Tool
- Component names are validated against a whitelist
- Path traversal protection is implemented
- File permissions are set to 0644 (read-write for owner, read-only for others)
- Command execution has timeout limits

### Dependencies
- All dependencies are regularly updated
- `pnpm audit` is run in CI/CD pipeline
- Automated security scanning is enabled

## Security Updates

Security updates will be released as soon as possible after a vulnerability is confirmed:
- **Critical**: Within 24 hours
- **High**: Within 7 days
- **Medium**: Within 30 days
- **Low**: Next regular release

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [npm Security Best Practices](https://docs.npmjs.com/packages-and-modules/securing-your-code)
