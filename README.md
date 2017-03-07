# mackerel-supervisor
monitoring supervisor status. If the status is not 'RUNNING', this module return exit(1) for sending alert to mackerel.

# INSTALL

1. you must install `mackerel-check-plugins`

rpm packege
```
$ yum install mackerel-check-plugins
```

or deb package

```
$ apt-get install mackerel-check-plugins
```

cf) [mackerel-check-plugins](https://mackerel.io/ja/docs/entry/howto/mackerel-check-plugins)

2. you can install this module.

```
$ npm install mackerel-supervisor
```

# SETTING EXAMPLE

You write this config to `/etc/mackerel-agent/mackerel-agent.conf`, and restart mackerel-agent.
(you must change file path)

```
[plugin.checks.supervisord_running]
command = "/path/to/node_modules/.bin/monitor-supervisor"
```

```sh
$ sudo service mackerel-agent configtest
$ sudo service mackerel-agent restart
```
