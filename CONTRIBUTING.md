# Contributing to AL Indent Prism

Thank you for your interest in contributing! This document provides guidelines and information for contributors.

## Ways to Contribute

- Report bugs
- Suggest new features
- Improve documentation
- Create color presets
- Submit code changes
- Translate documentation
- Star and share the project

## Reporting Bugs

Before reporting a bug:
1. Check if it's already reported in [Issues](../../issues)
2. Test with the latest version
3. Test with minimal configuration

### Bug Report Template

```markdown
**Description**
Clear description of the bug

**Steps to Reproduce**
1. Open AL file with...
2. Configure settings...
3. Observe behavior...

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- VS Code version:
- Extension version:
- OS:
- Theme:

**Screenshots**
If applicable
```

## Suggesting Features

We love new ideas! Open a [GitHub Discussion](../../discussions) with:
- Clear use case
- Expected behavior
- Why it would benefit the community

Check the [roadmap](ROADMAP-2026.md) to see if it's already planned.

## Contributing Color Presets

Share your color schemes with the community!

### Preset Guidelines
- Must work in both dark and light themes
- Include 6+ colors
- Test for color blindness accessibility
- Provide preview screenshot

### Preset Submission
1. Fork the repository
2. Add preset to `presets/` folder
3. Include preview image
4. Update preset catalog
5. Submit pull request

## Code Contributions

### Development Setup

```bash
# Clone repository
git clone https://github.com/YOUR-USERNAME/al-indent-prism.git
cd al-indent-prism

# Install dependencies
npm install

# Compile
npm run compile

# Watch mode
npm run watch

# Test
Press F5 in VS Code
```

### Coding Standards

- TypeScript for all code
- ESLint configuration must pass
- Meaningful variable names
- Comments for complex logic
- Keep functions focused and small

### Pull Request Process

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes**
   - Write clean code
   - Add comments
   - Update documentation

3. **Test thoroughly**
   - Test with various AL files
   - Test light and dark themes
   - Test configuration changes

4. **Commit with clear messages**
   ```bash
   git commit -m "feat: add color preset picker"
   git commit -m "fix: resolve theme switching bug"
   git commit -m "docs: update README examples"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   - Fill out PR template
   - Link related issues
   - Add screenshots if UI changes

6. **Respond to review**
   - Address feedback promptly
   - Be open to suggestions
   - Update as needed

### Commit Message Convention

Use conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation only
- `style:` Code style (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

## Documentation

Documentation improvements are always welcome!

### What to Document
- New features and settings
- Configuration examples
- Common use cases
- Troubleshooting tips
- Best practices

### Documentation Style
- Clear and concise
- Use examples
- Include screenshots
- Test all code examples

## Translation

Help make AL Indent Prism accessible globally!

### Translation Guidelines
- Translate README.md
- Translate configuration descriptions
- Maintain formatting
- Keep technical terms in English when appropriate

## Good First Issues

Look for issues labeled [`good first issue`](../../issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) - these are great starting points!

## Contribution Ideas

### Easy
- Add new color presets
- Fix typos in documentation
- Add code examples to README
- Create demo GIFs

### Medium
- Improve performance
- Add configuration options
- Write tests
- Create theme integrations

### Advanced
- Implement syntax awareness
- Add error detection
- Build preset marketplace
- Create AI features

## Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inclusive environment.

### Our Standards
- Be respectful and professional
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Public or private harassment
- Publishing private information
- Other unprofessional conduct

### Enforcement
Violations may result in temporary or permanent ban from the project.

## Recognition

Contributors will be:
- Listed in CHANGELOG.md
- Mentioned in release notes
- Added to contributors list
- Featured in community highlights

## Questions?

- Open a [Discussion](../../discussions)
- Comment on related [Issues](../../issues)
- Check existing documentation

## Thank You!

Every contribution, no matter how small, makes AL Indent Prism better for everyone. We appreciate your time and effort!

---

**Ready to contribute?** Start with a [Good First Issue](../../issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) or share your ideas in [Discussions](../../discussions)!
