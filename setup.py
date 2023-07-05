from setuptools import setup

setup(
    name='lia_theme',
    version='0.1.0',
    #url=
    license='MIT',
    author='Natalia Platova nataliaplatova47@gmail.com',
    # description
    # long_description
    packages=['lia_theme'],
    package_data={'lia_theme': [
        'theme.conf',
        '*.html',
        'static/css/*.css',
        'static/js/*.js',
        'static/font/*.*'
    ]},
        entry_points = {
        'sphinx.html_themes': [
            'lia = lia_theme',
        ]
    },
    install_requires=[
       'sphinx'
    ],
    classifiers=[
        'Framework :: Sphinx',
        'Framework :: Sphinx :: Theme',
        'Development Status :: 5 - Production/Stable',
        'License :: OSI Approved :: MIT License',
        'Environment :: Console',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Operating System :: OS Independent',
        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ],
)