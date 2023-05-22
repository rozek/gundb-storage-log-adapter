/**** storage log adapter ****/

  GUN.on('create', function (Context) {        // do not use a "fat arrow" here!
    this.to.next(Context)

    if (Context.opt.storagelog != true) { return }   // adapter wasn't requested

  /**** get - retrieve the contents of a given node ****/

    Context.on('get', function (WireMessage) {           // no "fat arrow" here!
      this.to.next(WireMessage)
      console.log('! GET',WireMessage.get)
      GUN.on.get.ack(WireMessage,undefined)
    })

  /**** put - patches the contents of a given node ****/

    Context.on('put', function (WireMessage) {           // no "fat arrow" here!
      this.to.next(WireMessage)
      console.log('! PUT',WireMessage.put)
      Context.on('in', { '@':WireMessage['#'], err:undefined, ok:1 })
    })
  })

