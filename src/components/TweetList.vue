<template>
  <q-list>
    <q-item class="q-py-md">
      <q-item-section avatar top>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar4.jpg">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-subtitle1">
          <span class="text-weight-bold q-mr-sm">Jordan Wild</span>
          <span class="text-grey-7">@jordan_wild</span>
        </q-item-label>
        <q-item-label class="text-body1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ipsa cum asperiores reprehenderit ut tempora corrupti officiis
          non porro unde? Alias recusandae dicta eos voluptatem doloremque
          illum suscipit sit expedita fuga soluta assumenda eligendi doloribus
          maxime, voluptatibus et.
        </q-item-label>

        <div class="row">
          <div class="col">
            <q-btn
              color="grey"
              icon="far fa-comment"
              size="sm"
              flat
              round
            />
          </div>
          <div class="col">
            <q-btn
              color="grey"
              icon="fas fa-retweet"
              size="sm"
              flat
              round
            />
          </div>
          <div class="col">
            <q-btn
              color="grey"
              icon="far fa-heart"
              size="sm"
              flat
              round
            />
          </div>
          <div class="col">
            <q-btn
              color="grey"
              icon="fas fa-trash"
              size="sm"
              flat
              round
            />
          </div>
        </div>
      </q-item-section>

      <q-item-section side top>
        1 min ago
      </q-item-section>
    </q-item>

    <q-separator inset="item" />
  </q-list>
</template>
