# gundb-storage-log-adapter #

logs messages intended for GunDB storage adapters

Storage adapters for [GunDB](https://github.com/amark/gun) react on messages sent by GunDB. For debugging purposes it is sometimes useful to log these messages without having to touch the storage adapter itself. That's what this adapter is good for.

> **Important**: this adapter is not yet finished and its documentation still has to be written. The plan is to finish everything by end of June, 2023

## Usage ##

Copy the contents of file [StorageLogAdapter.js](./src/StorageLogAdapter.js) into a `<script>` element and add it to the `<head>` section of your HTML document right after the one for GunDB itself.

```
<script src="https://cdn.jsdelivr.net/npm/gun/gun.js"></script>
<script>
  ... insert source code here
</script>
```

Then, create your GunDB instance with the following option (among others, if need be):

```
  const Gun = GUN({ storagelog:true })
```

From now on, every `get` and `put` request should log one or multiple storage adapter events.

**Important**: be aware that GunDB sends an awful lot of such messages - even if you plan to write a single object only, GunDB sends a message for the object itself and each of the provided object properties.

## License ##

[MIT License](LICENSE.md)
